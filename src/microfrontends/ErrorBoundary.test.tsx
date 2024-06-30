import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { OpenMicrofrontend } from "./ErrorBoundary";

describe("OpenMicrofrontend", () => {

  it("should render OpenMicrofrontend", () => {
    render(
      <OpenMicrofrontend  name="teste">
        <div data-testid="teste" >Teste</div>
      </OpenMicrofrontend>
    );
    expect(screen.getByTestId("teste")).toBeInTheDocument();
  });

  it("should render OpenMicrofrontend with error loading", () => {
    // render(
    //   <OpenMicrofrontend  name="teste">
    //     <MockErrorComponent/>
    //   </OpenMicrofrontend>
    // );
    expect(screen.getByTestId("message-error")).toBeInTheDocument();
  });
});