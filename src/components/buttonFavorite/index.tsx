import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { EnumProfileInformation } from "../../enums/redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProfileInformationRequest } from "../../redux/reducers/userReducer";
import { Colors } from "../../styles/colors";
import { StyledButtonFavorite } from "../../styles/profile";
import { ButtonFavoritesEnum } from "../../enums/titles/enum";
import { StyledDivDescription } from "../../styles/details";
import { useAddFavorites } from "../../hooks/useAddFavorites";
import { toast } from "react-toastify";

export const ButtonFavorite: React.FC<{
  id: number;
  image: string;
  name: string;
}> = ({ id, image, name }) => {
  const [update, setUpdate] = useState(false);
  const [userFavorites, setUserFavorites] = useState<any>([]);

  const [handleAddFavorites] = useAddFavorites();
  const userProfile: EnumProfileInformation = useSelector(
    (state: any) => state?.userInformation?.userProfileInformation
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileInformationRequest());
  }, [update]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    userProfile?.favorites
      ? setUserFavorites(JSON.parse(userProfile.favorites))
      : null;
  }, [userProfile]);

  const handleAdd = async () => {
    let new_favorites = userFavorites;
    new_favorites.push({ id: id, name: name, image: image });
    new_favorites = JSON.stringify(new_favorites);
    const response = await handleAddFavorites(new_favorites);
    if (response.status === 200) {
      setUpdate(!update);
      return toast.success(ButtonFavoritesEnum.SuccessfullyAdded);
    } else {
      toast.error(ButtonFavoritesEnum.Error);
    }
  };

  const handleRemove = async () => {
    let new_favorites = userFavorites;
    new_favorites = new_favorites.filter(
      (item: { id: number }) => item.id !== id
    );
    new_favorites = JSON.stringify(new_favorites);
    const response = await handleAddFavorites(new_favorites);
    if (response.status === 200) {
      setUpdate(!update);
      return toast.success(ButtonFavoritesEnum.SuccesfullyRemover);
    } else {
      toast.error(ButtonFavoritesEnum.Error);
    }
  };

  return (
    <StyledDivDescription>
      {userFavorites.find((item: { id: number }) => item.id === id) ? (
        <StyledButtonFavorite onClick={handleRemove}>
          <FaHeart
            size={20}
            color={Colors.orange}
            style={{ marginRight: "1vh" }}
          />
          {ButtonFavoritesEnum.Remove}
        </StyledButtonFavorite>
      ) : (
        <StyledButtonFavorite onClick={handleAdd}>
          <FaHeartBroken
            size={20}
            color={Colors.orange}
            style={{ marginRight: "1vh" }}
          />
          {ButtonFavoritesEnum.Add}
        </StyledButtonFavorite>
      )}
    </StyledDivDescription>
  );
};
