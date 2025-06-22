import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

export function Hero() {
  const stats = [
    { label: 'Total Value Locked', value: '$124.5M', change: '+12.3%' },
    { label: 'Active Protocols', value: '23', change: '+3' },
    { label: 'Average APY', value: '8.4%', change: '+0.7%' },
    { label: 'Total Users', value: '45.2K', change: '+1.2K' },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Maximize Yields',
      description: 'Find the best yield opportunities across all Stellar DeFi protocols'
    },
    {
      icon: Shield,
      title: 'Secure & Audited',
      description: 'All protocols are thoroughly audited and security-verified'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Execute trades and transactions with minimal fees on Stellar network'
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl transform -skew-y-6 scale-150" />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Stellar DeFi
            <br />
            Aggregator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover, compare, and maximize your returns across all Stellar DeFi protocols. 
            One platform, infinite possibilities.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Start Exploring
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                <div className="text-xs text-green-400">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}