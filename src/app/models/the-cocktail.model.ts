export interface NavigationLink {
  label: string;
  path: string;
}

export interface TabContent {
  title: string;
  specs: Array<string>;
  cta: string;
}

export interface HotelInfo {
  type: string;
  name: string;
  stars: number;
}

export interface Tag {
  position: string;
  label: string;
}

export interface SeeMore {
  label: string;
  title?: string;
  info: Array<string>;
  footNote?: string;
}

export interface RoomExtra {
  title: string;
  body: string;
  img: string;
  seeMore?: SeeMore;
}

export interface RoomExtraContainer {
  title: string;
  subtitle?: string;
  tag: Tag;
  extras: Array<RoomExtra>;
}
