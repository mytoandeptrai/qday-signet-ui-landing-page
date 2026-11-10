import { Link } from "@tanstack/react-router";
import { formatDate } from "@/utils";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import type { blogPage, Post } from "@/content/pages/blog";

type BlogPostUiProps = {
  post: Post;
  back: (typeof blogPage)["back"];
};

const BlogPostUi = ({ post, back }: BlogPostUiProps) => {
  return (
    <article className="mx-auto max-w-[720px] px-4 py-10 md:px-8 md:py-20">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/blog">{back}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.tag}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Badge variant="secondary" className="mt-8">
        {post.tag}
      </Badge>
      <h1 className="mt-4 font-display text-[39px] font-medium leading-[1.05] tracking-[-0.02em] text-foreground md:text-[49px]">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {post.author} / {formatDate(post.date)} / {post.readMinutes} min
      </p>
      <Separator className="my-8 bg-divider" />
      <div className="space-y-5">
        <p className="text-[19px] leading-[1.55] text-foreground">{post.excerpt}</p>
        {post.sections.map((s, i) => (
          <section key={s.heading ?? i} className="space-y-4">
            {s.heading && (
              <h2 className="pt-4 font-display text-[25px] font-medium text-foreground">
                {s.heading}
              </h2>
            )}
            {s.paragraphs.map((t, j) => (
              <p key={j} className="text-[17px] leading-[1.7] text-muted-foreground">
                {t}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
};

export default BlogPostUi;
