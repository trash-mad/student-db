
/// <reference path="./components/index.ts"/>
/// <reference path="./pages/index.ts"/>

namespace student {

  const {
    MuiThemeProvider,
    createMuiTheme,
  } = material.core;

  const {
    Scaffold,
  } = components;

  const {
    ListPage,
    OnePage,
  } = pages;

  const {
    SnackProvider,
  } = other.snack;

  const {
    Router,
    Route,
  } = router;

  const {
    LooksOne,
    LooksTwo,
    Looks3,
  } = material.icons;

  const {
    useRef,
  } = React;

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#f48fb1',
      },
      secondary: {
        main: '#90cbf9',
      },
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        hint: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      background: {
        paper: "#424242",
        default: "#212121",
        level2: "#333333",
        level1: "#212121"
      },
    },
  });

  const App = () => {
    const router = useRef(null);
    const pages = [
      {icon: LooksOne, title: "Список студентов", click() { router.current("/") } },
    ];
    return (
      <MuiThemeProvider theme={theme}>
        <SnackProvider>
          <Scaffold title="Student app" pages={pages}>
            <Router ref={router}>
              <Route url="/" component={ListPage}/>
              <Route url="/one/:id" component={OnePage}/>
            </Router>
          </Scaffold>
        </SnackProvider>
      </MuiThemeProvider>
    );
  }

  export const main = () =>
    ReactDOM.render(<App/>, document.querySelector('#mount-point'));

} // namespace student
