import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import EventModal from "../EventModal";
import { Provider } from "react-redux";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ThemeProvider } from "styled-components";
import dark from "../../styles/themes/dark";

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);
describe("Create Event", () => {
  test("Should render without crashing", () => {
    const store = mockStore();
    const component = renderer.create(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should have a Name input", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );
    expect(getByTestId("name-input")).toBeTruthy();
  });

  test("Should have a City input", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );

    expect(getByTestId("city-input")).toBeTruthy();
  });

  test("Should have a Color input", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );

    expect(getByTestId("color-container")).toBeTruthy();
  });

  test("Should have a Date input", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );

    expect(getByTestId("date-input")).toBeTruthy();
  });

  test("Should have a Time input", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );

    expect(getByTestId("time-input")).toBeTruthy();
  });

  test("Should be able to change Name input value", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );

    const nameInput = getByTestId("name-input");
    fireEvent.change(nameInput, { target: { value: "Coffee" } });
    expect(getByTestId("name-input").value).toEqual("Coffee");
  });

  test("Should be able to change City input value", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );

    const cityInput = getByTestId("city-input");
    fireEvent.change(cityInput, { target: { value: "Paris" } });
    expect(getByTestId("city-input").value).toEqual("Paris");
  });

  test("Should be able to change Color value", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );

    const color = getByTestId("color-salmon");
    // fireEvent.click(color, rightClick);
  });

  test("Should be able to change Date input value", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );

    const dateInput = getByTestId("date-input");
    fireEvent.change(dateInput, { target: { value: "2021-04-01" } });
    expect(getByTestId("date-input").value).toEqual("2021-04-01");
  });

  test("Should be able to change Time input value", () => {
    const store = mockStore();
    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <EventModal type={"create"} />
        </ThemeProvider>
      </Provider>
    );
    const timeInput = getByTestId("time-input");
    fireEvent.change(timeInput, { target: { value: "07:39" } });
    expect(getByTestId("time-input").value).toEqual("07:39");
  });
});
