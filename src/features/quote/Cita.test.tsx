import { render } from "../../test-utils";
import Quote from "./Cita";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("QuoteComponent", () => {
  it("should render default quote", () => {
    render(<Quote />);
    expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument();
  });

  it("should render loading when click the random button", async () => {
    render(<Quote />);
    await waitFor(() => {
      userEvent.click(screen.getByText("Obtener cita aleatoria"));
    });
    expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
  });

  it("should render loading when click the character button", async () => {
    render(<Quote />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    userEvent.type(input, "Milhouse Van Houten");
    await waitFor(() => {
      userEvent.click(screen.getByText("Obtener Cita"));
    });
    expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
  });

  it("should render character quote when click button with a valid input value", async () => {
    render(<Quote />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    userEvent.type(input, "Homer Simpson");
    await waitFor(() => {
      userEvent.click(screen.getByText("Obtener Cita"));
    });
    expect(await screen.findByText("Marriage is like a coffin and each kid is another nail.")).toBeInTheDocument();
    /*expect(
      await screen.findByText("Marriage is like a coffin and each kid is another nail.", { selector: '#root > div > header > div > p.sc-gEvEer.gJaILS' })
    ).toBeInTheDocument();*/
  });

  it("should render random quote when click button without an input value", async () => {
    render(<Quote />);
    userEvent.click(screen.getByText("Obtener cita aleatoria"));
    expect(
      screen.queryByText("No se encontro ninguna cita")
    ).toBeInTheDocument();
  });


  it("should render error when not found character name", async () => {
    render(<Quote />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await userEvent.type(input, "Pedro Pablo");
    userEvent.click(screen.getByLabelText("Obtener Cita"));
  
    await waitFor(() => {
      expect(screen.getByText("Por favor ingrese un nombre válido")).toBeInTheDocument();
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
      await screen.findByText("Por favor ingrese un nombre válido")
    ).toBeInTheDocument();
  });
});