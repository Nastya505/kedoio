import React, { useState } from "react";
import styles from "./tabs.module.css";

const Tabs = ({ text }) => {
  const tabs = [
    {
      title: "характеристика",
      review: null,
      text: "Кеды - это тип повседневной обуви, популярный благодаря удобству, универсальности и стильному внешнему виду. Изначально разработанные как спортивная обувь для тенниса, кеды со временем стали незаменимыми в гардеробах людей во всем мире.",
    },
    { title: "описание", review: null, text: text },
    {
      title: "отзывы",
      text: null,
      review: [
        {
          id: 1,
          name: "Франк",
          text: "Эти кеды просто отличные! Очень удобные и стильные. Материал качественный, подошва мягкая, идеально подходят для повседневной носки. Я доволен своей покупкой и рекомендую всем!",
        },
        {
          id: 2,
          name: "Мэри",
          text: "Дизайн очень стильный, я получила много комплиментов на их счет. Рада, что приобрела их, рекомендую всем!",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.circleBig}></div>
      <div className={styles.circleSmall}></div>
      <div className={styles.menu}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${activeTab === index ? styles.active : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${
              activeTab === index ? styles.active : ""
            }`}
          >
            <div className="lg:flex-col flex justify-center gap-4">
            {tab.text !== null
              ? tab.text
              : tab.review.map((r) => 
              <div style={{border:"1px solid black", borderRadius:"15px"}} className="flex flex-col gap-3 p-6" key={r.id}>
                <span className="font-bold">{r.name}</span>
                <span>{r.text}</span>
              </div>)}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
