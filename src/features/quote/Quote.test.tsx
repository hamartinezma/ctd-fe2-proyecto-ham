import { render, screen, waitFor } from "../../test-utils";
import Quote from "./Quote";
import userEvent from "@testing-library/user-event";
import {
  MENSAJE_CARGANDO,
  NOMBRE_INVALIDO,
  NO_ENCONTRADO,
} from "./constants";

describe("QuoteComponent", () => {
  it("should render default quote", () => {
    render(<Quote />);
    expect(screen.getByText(NO_ENCONTRADO)).toBeInTheDocument();
  });

  it("should render loading when click the random button", async () => {
    render(<Quote />);
    await waitFor(() => {
      userEvent.click(screen.getByText("Obtener cita aleatoria"));
    });
    expect(await screen.findByText(MENSAJE_CARGANDO)).toBeInTheDocument();
  });

  it("should render loading when click the character button", async () => {
    render(<Quote />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    userEvent.type(input, "Milhouse Van Houten");
    await waitFor(() => {
      userEvent.click(screen.getByText("Obtener Cita"));
    });
    expect(await screen.findByText(MENSAJE_CARGANDO)).toBeInTheDocument();
  });

  it("should render character quote when click button with a valid input value", async () => {
    render(<Quote />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    userEvent.type(input, "Homer Simpson");
    await waitFor(() => {
      userEvent.click(screen.getByText("Obtener Cita"));
    });
    expect(await screen.findByText("Marriage is like a coffin and each kid is another nail.")).toBeInTheDocument();
  });

  it("should render random quote when click button without an input value", async () => {
    render(<Quote />);
    userEvent.click(screen.getByText("Obtener cita aleatoria"));
    expect(screen.queryByText(NO_ENCONTRADO)).toBeInTheDocument();
  });

  it("should render error when not found character name", async () => {
    render(<Quote />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await userEvent.type(input, "Pedro Pablo");
    userEvent.click(screen.getByLabelText("Obtener Cita"));

    await waitFor(() => {
      expect(screen.getByText(NOMBRE_INVALIDO)).toBeInTheDocument();
    });
  });

  it("should render error when invalid input", async () => {
    render(<Quote />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    userEvent.type(input, "1");
    await waitFor(() => {
      userEvent.click(screen.getByText("Obtener Cita"));
    });
    expect(
      await screen.findByText(NOMBRE_INVALIDO)
    ).toBeInTheDocument();
  });
});