import { PageShellContainer } from "@/modules/site-shell";
import { BlogPostUi } from "../../components";
import { useBlogPostContainer } from "../../hooks";

const BlogPostContainer = () => {
  const props = useBlogPostContainer();
  return (
    <PageShellContainer>
      <BlogPostUi {...props} />
    </PageShellContainer>
  );
};

export default BlogPostContainer;
