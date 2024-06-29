import React from "react";

interface ITab {
  tabs: {
    name: string;
    component: React.ComponentType;
  }[]
}

export default function Tabs({ tabs }: ITab) {
  console.log({ tabs })

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {tabs.map((tab, index) => (
        <React.Fragment key={index}>
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label={`Tab ${index + 1}`}
            defaultChecked={index === 0}
          />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <tab.component />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
