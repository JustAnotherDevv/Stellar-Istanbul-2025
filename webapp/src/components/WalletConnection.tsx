import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Wallet, CheckCircle, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

interface WalletConnectionProps {
  isConnected: boolean;
  onConnectionChange: (connected: boolean) => void;
}

export function WalletConnection({ isConnected, onConnectionChange }: WalletConnectionProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const wallets = [
    {
      name: 'Freighter',
      icon: '🚀',
      description: 'The most popular Stellar wallet extension',
      recommended: true
    },
    {
      name: 'Albedo',
      icon: '🌟',
      description: 'Secure web-based Stellar wallet',
      recommended: false
    },
    {
      name: 'Lobstr',
      icon: '🦞',
      description: 'Mobile-first Stellar wallet',
      recommended: false
    },
    {
      name: 'Solar Wallet',
      icon: '☀️',
      description: 'Desktop Stellar wallet application',
      recommended: false
    }
  ];

  const handleWalletConnect = async (walletName: string) => {
    setIsConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      const mockAddress = 'GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      setWalletAddress(mockAddress);
      onConnectionChange(true);
      setIsConnecting(false);
      toast.success(`Connected to ${walletName} successfully!`);
    }, 2000);
  };

  const handleDisconnect = () => {
    setWalletAddress('');
    onConnectionChange(false);
    toast.info('Wallet disconnected');
  };

  if (isConnected) {
    return (
      <div className="fixed top-20 right-4 z-50">
        <Card className="bg-green-600/10 border-green-600/30 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <div>
                <div className="text-sm text-white font-medium">Wallet Connected</div>
                <div className="text-xs text-gray-400">
                  {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
                </div>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={handleDisconnect}
                className="text-red-400 hover:text-red-300 hover:bg-red-600/20"
              >
                Disconnect
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="bg-yellow-600/10 border-yellow-600/30 backdrop-blur-sm hover:bg-yellow-600/20 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Wallet className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-sm text-white font-medium">Connect Wallet</div>
                  <div className="text-xs text-gray-400">Access DeFi features</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        
        <DialogContent className="bg-slate-900 border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Connect Your Stellar Wallet</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              Connect your Stellar wallet to access DeFi features like swapping, farming, and portfolio tracking.
            </p>
            
            <div className="space-y-3">
              {wallets.map((wallet, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{wallet.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-medium">{wallet.name}</span>
                            {wallet.recommended && (
                              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                Recommended
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-400">{wallet.description}</div>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleWalletConnect(wallet.name)}
                        disabled={isConnecting}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {isConnecting ? 'Connecting...' : 'Connect'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <ExternalLink className="h-5 w-5 text-blue-400 mt-0.5" />
                <div className="text-sm text-blue-200">
                  <p className="font-medium mb-1">New to Stellar?</p>
                  <p>
                    Don't have a wallet? We recommend starting with Freighter - it's easy to set up and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}