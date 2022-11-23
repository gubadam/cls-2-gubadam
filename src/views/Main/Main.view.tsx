import React from "react";
import { PlaylistModelWithId } from "~/models/playlist.model";
import { GridList, GridListItem } from "~/components";

interface Props {
  items: Array<PlaylistModelWithId>;
}

const Main = ({ items }: Props) => (
  <GridList>
    {items.map((item) => (
      <GridListItem item={item} key={item.id} />
    ))}
  </GridList>
)

export default Main;
