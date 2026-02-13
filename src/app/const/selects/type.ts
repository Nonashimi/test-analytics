export type TMySelect = {
  icon: React.ReactNode;
  options?: TOptions[];
  title: string;
  isCalendar?: boolean;
}

export type TOptions = {
  label: string;
  value: string;
}