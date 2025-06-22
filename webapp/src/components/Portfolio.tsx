import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { Wallet, TrendingUp, DollarSign, Percent } from 'lucide-react';

interface PortfolioProps {
  isConnected: boolean;
}

export function Portfolio({ isConnected }: PortfolioProps) {
  const portfolioData = [
    { name: 'XLM', value: 45, color: '#3B82F6' },
    { name: 'USDC', value: 25, color: '#10B981' },
    { name: 'AQUA', value: 15, color: '#8B5CF6' },
    { name: 'BTC', value: 10, color: '#F59E0B' },
    { name: 'Others', value: 5, color: '#6B7280' }
  ];

  const performanceData = [
    { date: 'Jan', value: 10000 },
    { date: 'Feb', value: 12000 },
    { date: 'Mar', value: 11500 },
    { date: 'Apr', value: 14000 },
    { date: 'May', value: 16500 },
    { date: 'Jun', value: 18200 }
  ];

  const positions = [
    { protocol: 'StellarX', asset: 'XLM/USDC LP', amount: '$5,432', apy: '12.4%', earnings: '+$234' },
    { protocol: 'Aquarius', asset: 'AQUA Staking', amount: '$3,210', apy: '18.7%', earnings: '+$189' },
    { protocol: 'Lobstr Vault', asset: 'USDC Lending', amount: '$2,100', apy: '8.9%', earnings: '+$98' },
  ];

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Wallet className="h-16 w-16 text-gray-500 mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Connect Your Wallet</h3>
        <p className="text-gray-400 text-center max-w-md mb-6">
          Connect your Stellar wallet to view your DeFi portfolio and track your investments across all protocols.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Connect Wallet
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Portfolio</h2>
          <p className="text-gray-400">Track your DeFi investments and performance</p>
        </div>
        <Badge className="bg-green-600/20 text-green-300 border-green-600/30">
          +12.3% This Month
        </Badge>
      </div>

      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Value</p>
                <p className="text-2xl font-bold text-white">$18,247</p>
              </div>
              <DollarSign className="h-8 w-8 text-blue-400" />
            </div>
            <p className="text-sm text-green-400 mt-2">+8.2% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Earnings</p>
                <p className="text-2xl font-bold text-white">$2,341</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
            <p className="text-sm text-green-400 mt-2">+15.7% yield this month</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Avg. APY</p>
                <p className="text-2xl font-bold text-white">13.2%</p>
              </div>
              <Percent className="h-8 w-8 text-purple-400" />
            </div>
            <p className="text-sm text-blue-400 mt-2">Across 3 protocols</p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Active Positions</p>
                <p className="text-2xl font-bold text-white">3</p>
              </div>
              <Wallet className="h-8 w-8 text-cyan-400" />
            </div>
            <p className="text-sm text-gray-400 mt-2">All protocols</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Asset Allocation */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {portfolioData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-300">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Chart */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Portfolio Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Positions */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Active Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{position.protocol[0]}</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">{position.asset}</div>
                    <div className="text-sm text-gray-400">{position.protocol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-medium">{position.amount}</div>
                  <div className="text-sm text-green-400">{position.apy}</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-medium">{position.earnings}</div>
                  <div className="text-sm text-gray-400">Earnings</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}