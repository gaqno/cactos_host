import MESSAGES from "@/constant/Messages";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export function MfErrorFallback({ errorOrigin }: { errorOrigin: string }) {
  const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
  );
  const footer = (
      <Button 
        label="Tentar novamente" 
        icon="pi pi-check" 
        onClick={() => window.location.reload()}
      />
  );

  return (
    <Card 
      title="Erro no carregamento" 
      subTitle="Tente novamente mais tarde" 
      footer={footer} 
      header={header} 
      className="m-2 md:w-25rem mx-auto">
      <p className="m-0">
        <strong className="font-bold">{MESSAGES?.error_microfrontend}</strong>
        <span className="block sm:inline">{errorOrigin}</span>
      </p>
    </Card>

  );
}
