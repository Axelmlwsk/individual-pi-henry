import React from "react";
import ActivitiesForm from "../../components/ActivitiesForm/ActivitiesForm";
import css from "./TouristActivities.module.css";
function TouristActivities() {
  return (
    <div className={css.container}>
      <h1>CREATE A TOURIST ACTIVITY</h1>
      <ActivitiesForm />
    </div>
  );
}

export default TouristActivities;
