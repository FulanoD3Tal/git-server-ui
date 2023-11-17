export interface IThemeSwitcher {
  switch(theme: Theme): Theme;
  load(): Theme;
}
