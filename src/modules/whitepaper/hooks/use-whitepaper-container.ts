import { useEffect, useState } from "react";
import { whitepaper } from "@/content/pages/whitepaper";

/** Id of the section nearest the top of the viewport, for the table of contents. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | undefined>(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const ids = whitepaper.sections.map((s) => s.id);

export const useWhitepaperContainer = () => {
  const { hero, versions, versionLabel, download, tocLabel, sections } = whitepaper;
  const [versionId, setVersionId] = useState(versions[0].id);
  const version = versions.find((v) => v.id === versionId) ?? versions[0];
  const active = useActiveSection(ids);

  return {
    hero,
    versions,
    versionLabel,
    download,
    tocLabel,
    sections,
    versionId,
    version,
    active,
    onVersionChange: setVersionId,
  };
};
