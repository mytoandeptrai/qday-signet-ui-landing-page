type LayersHeadingUiProps = {
  title: string;
  body: string;
};

const LayersHeadingUi = ({ title, body }: LayersHeadingUiProps) => {
  return (
    <div className="max-w-[1200px]">
      <h2 className="font-display text-[31px] font-medium tracking-[-0.02em] text-foreground md:text-[49px]">
        {title}
      </h2>
      <p className="mt-4 max-w-[34rem] text-[17px] leading-[1.55] text-muted-foreground md:text-lg">
        {body}
      </p>
    </div>
  );
};

export default LayersHeadingUi;
