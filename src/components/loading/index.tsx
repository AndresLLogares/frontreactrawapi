import { Loader } from "../../styles/loading";
import { BoxLoading } from "../../styles/main";
import Layout from "../layout";

function Loading() {
  return (
    <Layout>
      <BoxLoading>
        <Loader></Loader>
      </BoxLoading>
    </Layout>
  );
}

export default Loading;
