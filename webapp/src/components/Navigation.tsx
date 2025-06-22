import { Button } from '@/components/ui/button';
import { Rocket, BarChart3, Wallet, ArrowLeftRight, Coins, TrendingUp } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: 'dashboard' | 'portfolio' | 'swap' | 'farming' | 'analytics') => void;
  isWalletConnected: boolean;
}

export function Navigation({ activeTab, setActiveTab, isWalletConnected }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'portfolio', label: 'Portfolio', icon: Wallet },
    { id: 'swap', label: 'Swap', icon: ArrowLeftRight },
    { id: 'farming', label: 'Farming', icon: Coins },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  ];

  return (
    <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stellar DeFi
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`flex items-center space-x-2 ${
                    activeTab === item.id 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <div className={`h-2 w-2 rounded-full ${isWalletConnected ? 'bg-green-400' : 'bg-red-400'}`} />
            <span className="text-sm text-gray-300">
              {isWalletConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab(item.id as any)}
                  className={`flex items-center space-x-1 ${
                    activeTab === item.id 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}