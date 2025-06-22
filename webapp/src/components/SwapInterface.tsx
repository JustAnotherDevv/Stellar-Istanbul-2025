import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowDownUp, Settings, Info, Zap } from "lucide-react";
import { toast } from "sonner";

interface SwapInterfaceProps {
  isConnected: boolean;
}

export function SwapInterface({ isConnected }: SwapInterfaceProps) {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState("XLM");
  const [toToken, setToToken] = useState("USDC");

  const tokens = [
    {
      symbol: "XLM",
      name: "Stellar Lumens",
      balance: "1,234.56",
      price: "$0.12",
    },
    { symbol: "USDC", name: "USD Coin", balance: "567.89", price: "$1.00" },
    { symbol: "AQUA", name: "Aqua Token", balance: "890.12", price: "$0.08" },
    { symbol: "BTC", name: "Bitcoin", balance: "0.0123", price: "$43,250" },
  ];

  const swapRoutes = [
    { protocol: "StellarX", rate: "8.334", fee: "0.1%", time: "~3s" },
    { protocol: "Aquarius", rate: "8.328", fee: "0.15%", time: "~5s" },
    { protocol: "Lobstr DEX", rate: "8.320", fee: "0.2%", time: "~4s" },
  ];

  const handleSwap = () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }
    if (!fromAmount) {
      toast.error("Please enter an amount to swap");
      return;
    }
    toast.success("Swap initiated successfully!");
  };

  const flipTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Token Swap</h2>
        <p className="text-gray-400">
          Trade tokens at the best rates across Stellar DEXs
        </p>
      </div>

      {/* Swap Interface */}
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">Swap</CardTitle>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* From Token */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>From</span>
              <span>
                Balance: {tokens.find((t) => t.symbol === fromToken)?.balance}{" "}
                {fromToken}
              </span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="0.0"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="bg-white/10 border-white/20 text-white text-xl h-14"
                />
              </div>
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 min-w-[100px]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full" />
                  {fromToken}
                </div>
              </Button>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={flipTokens}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2"
            >
              <ArrowDownUp className="h-4 w-4" />
            </Button>
          </div>

          {/* To Token */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>To</span>
              <span>
                Balance: {tokens.find((t) => t.symbol === toToken)?.balance}{" "}
                {toToken}
              </span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="0.0"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="bg-white/10 border-white/20 text-white text-xl h-14"
                />
              </div>
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 min-w-[100px]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full" />
                  {toToken}
                </div>
              </Button>
            </div>
          </div>

          {/* Swap Details */}
          {fromAmount && (
            <div className="bg-white/5 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Rate</span>
                <span className="text-white">
                  1 {fromToken} = 8.334 {toToken}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Price Impact</span>
                <span className="text-green-400"> 0.01%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Fee</span>
                <span className="text-white">0.1%</span>
              </div>
            </div>
          )}

          <Button
            onClick={handleSwap}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 text-lg"
            disabled={!isConnected}
          >
            {!isConnected ? "Connect Wallet" : "Swap"}
          </Button>
        </CardContent>
      </Card>

      {/* Best Routes */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            Best Routes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {swapRoutes.map((route, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  index === 0
                    ? "bg-green-600/10 border-green-600/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  {index === 0 && (
                    <Badge className="bg-green-600 text-white text-xs">
                      Best
                    </Badge>
                  )}
                  <div>
                    <div className="text-white font-medium">
                      {route.protocol}
                    </div>
                    <div className="text-sm text-gray-400">
                      Fee: {route.fee} • {route.time}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">
                    {route.rate} {toToken}
                  </div>
                  <div className="text-sm text-gray-400">per {fromToken}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-blue-600/10 border-blue-600/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-400 mt-0.5" />
            <div className="text-sm text-blue-200">
              <p className="font-medium mb-1">Smart Routing</p>
              <p>
                We automatically find the best rates across all Stellar DEXs to
                maximize your returns and minimize slippage.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
