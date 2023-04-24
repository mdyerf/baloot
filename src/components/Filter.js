import React from "react";
import Button from "./Button";
import Switch from "./Switch";
import Text from "./Text";

function Filter({ available, onAvailableChange, sortBy, onSortByChange }) {
  const renderSortButton = (name) => (
    <Button
      onClick={() => onSortByChange(name)}
      text={name}
      variant={sortBy === name ? "selected" : null}
    />
  );
  return (
    <div class="filter">
      <div class="filter__available">
        <Text size="medium">Available commodities</Text>
        <Switch active={available} onChange={onAvailableChange} />
      </div>
      <div class="sort">
        <Text size="small">sort by:</Text>
        {renderSortButton("name")}
        {renderSortButton("price")}
      </div>
    </div>
  );
}

export default Filter;