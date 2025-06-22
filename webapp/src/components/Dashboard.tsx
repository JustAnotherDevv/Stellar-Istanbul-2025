import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, ExternalLink, Shield } from 'lucide-react';

export function Dashboard() {
  const protocols = [
    {
      name: 'StellarX',
      category: 'DEX',
      tvl: '$45.2M',
      apy: '12.4%',
      change: '+2.1%',
      trending: 'up',
      risk: 'Low',
      logo: '🌟'
    },
    {
      name: 'Aquarius',
      category: 'AMM',
      tvl: '$32.8M',
      apy: '15.7%',
      change: '+4.3%',
      trending: 'up',
      risk: 'Medium',
      logo: '🌊'
    },
    {
      name: 'Lobstr Vault',
      category: 'Lending',
      tvl: '$28.1M',
      apy: '8.9%',
      change: '-0.5%',
      trending: 'down',
      risk: 'Low',
      logo: '🦞'
    },
    {
      name: 'Ultra Stellar',
      category: 'Yield',
      tvl: '$18.4M',
      apy: '22.1%',
      change: '+7.2%',
      trending: 'up',
      risk: 'High',
      logo: '⚡'
    }
  ];

  const topOpportunities = [
    { protocol: 'Aquarius', pair: 'XLM/USDC', apy: '18.4%', tvl: '$5.2M' },
    { protocol: 'StellarX', pair: 'XLM/BTC', apy: '16.7%', tvl: '$8.1M' },
    { protocol: 'Ultra Stellar', pair: 'AQUA/XLM', apy: '24.3%', tvl: '$2.8M' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">DeFi Protocols</h2>
          <p className="text-gray-400">Discover and compare Stellar DeFi opportunities</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30">
            Live Data
          </Badge>
          <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-600/30">
            Real-time
          </Badge>
        </div>
      </div>

      {/* Top Opportunities */}
      <Card className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-purple-600/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            Top Yield Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topOpportunities.map((opp, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-white font-medium">{opp.pair}</div>
                    <div className="text-sm text-gray-400">{opp.protocol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-bold">{opp.apy}</div>
                  <div className="text-sm text-gray-400">{opp.tvl}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Protocols Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {protocols.map((protocol, index) => (
          <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{protocol.logo}</span>
                  <div>
                    <CardTitle className="text-white text-lg">{protocol.name}</CardTitle>
                    <Badge variant="outline" className="text-xs border-blue-600/50 text-blue-300">
                      {protocol.category}
                    </Badge>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400">TVL</div>
                  <div className="text-white font-semibold">{protocol.tvl}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">APY</div>
                  <div className="text-green-400 font-semibold">{protocol.apy}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {protocol.trending === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400" />
                  )}
                  <span className={`text-sm ${protocol.trending === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {protocol.change}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <span className={`text-xs ${
                    protocol.risk === 'Low' ? 'text-green-400' : 
                    protocol.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {protocol.risk}
                  </span>
                </div>
              </div>

              <Progress 
                value={Math.random() * 100} 
                className="h-2 bg-white/10"
              />
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                View Protocol
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}