import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { Portfolio } from "@/components/Portfolio";
import { SwapInterface } from "@/components/SwapInterface";
import { Analytics } from "@/components/Analytics";
import { YieldFarming } from "@/components/YieldFarming";
import { WalletConnection } from "@/components/WalletConnection";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";

type ActiveTab = "dashboard" | "portfolio" | "swap" | "farming" | "analytics";

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "portfolio":
        return <Portfolio isConnected={isWalletConnected} />;
      case "swap":
        return <SwapInterface isConnected={isWalletConnected} />;
      case "farming":
        return <YieldFarming isConnected={isWalletConnected} />;
      case "analytics":
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className=""></div>

      <div className="relative z-10">
        <Navigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isWalletConnected={isWalletConnected}
        />

        <WalletConnection
          isConnected={isWalletConnected}
          onConnectionChange={setIsWalletConnected}
        />

        {activeTab === "dashboard" && <Hero />}

        <main className="container mx-auto px-4 py-8">
          {renderActiveComponent()}
        </main>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
