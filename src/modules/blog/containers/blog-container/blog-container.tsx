import { PageShellContainer } from "@/modules/site-shell";
import { BlogUi } from "../../components";
import { useBlogContainer } from "../../hooks";

const BlogContainer = () => {
  const props = useBlogContainer();
  return (
    <PageShellContainer>
      <BlogUi {...props} />
    </PageShellContainer>
  );
};

export default BlogContainer;
