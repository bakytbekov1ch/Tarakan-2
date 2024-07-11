import React from "react";

import "./SectionTree.scss";
import { useTranslation } from "react-i18next";

function SectionTree() {
  const { t } = useTranslation();

  return (
    <div className="SectionTree">
      <div className="container">
        <div className="SectionTree__content">
          <div className="sectiontree__block">
            <h1>{t("year")}</h1>
            <h3>{t("work")}</h3>
          </div>

          <div className="sectiontree__block">
            <h1>1435</h1>
            <h3>{t("human")}</h3>
          </div>

          <div className="sectiontree__block">
            <h1>923</h1>
            <h3>{t("room")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTree;
