import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign, Percent, Users, Activity } from 'lucide-react';

export function Analytics() {
  const tvlData = [
    { date: '1W', value: 115 },
    { date: '2W', value: 118 },
    { date: '3W', value: 122 },
    { date: '1M', value: 125 },
    { date: '2M', value: 120 },
    { date: '3M', value: 128 },
    { date: 'Now', value: 132 }
  ];

  const protocolData = [
    { name: 'StellarX', tvl: 45.2, volume: 12.8 },
    { name: 'Aquarius', tvl: 32.8, volume: 8.4 },
    { name: 'Lobstr Vault', tvl: 28.1, volume: 5.2 },
    { name: 'Ultra Stellar', tvl: 18.4, volume: 6.1 },
    { name: 'Others', tvl: 7.5, volume: 3.3 }
  ];

  const categoryData = [
    { name: 'DEX', value: 40, color: '#3B82F6' },
    { name: 'Lending', value: 25, color: '#10B981' },
    { name: 'Yield Farming', value: 20, color: '#8B5CF6' },
    { name: 'Staking', value: 15, color: '#F59E0B' }
  ];

  const metrics = [
    { label: 'Total Value Locked', value: '$132.0M', change: '+5.2%', icon: DollarSign, color: 'text-green-400' },
    { label: '24h Volume', value: '$36.8M', change: '+12.7%', icon: Activity, color: 'text-blue-400' },
    { label: 'Active Users', value: '48.2K', change: '+8.3%', icon: Users, color: 'text-purple-400' },
    { label: 'Average APY', value: '14.6%', change: '+2.1%', icon: Percent, color: 'text-yellow-400' }
  ];

  const topTokens = [
    { symbol: 'XLM', name: 'Stellar Lumens', price: '$0.1247', change: '+2.34%', volume: '$18.2M' },
    { symbol: 'USDC', name: 'USD Coin', price: '$1.0001', change: '+0.01%', volume: '$12.8M' },
    { symbol: 'AQUA', name: 'Aqua Token', price: '$0.0891', change: '+8.45%', volume: '$4.2M' },
    { symbol: 'BTC', name: 'Bitcoin', price: '$43,247', change: '+1.23%', volume: '$1.6M' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">Analytics</h2>
          <p className="text-gray-400">DeFi market insights and trends on Stellar</p>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-green-600/20 text-green-300 border-green-600/30">
            Live Data
          </Badge>
          <Badge variant="outline" className="border-blue-600/50 text-blue-300">
            Updated 2m ago
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`h-8 w-8 ${metric.color}`} />
                  <Badge className={`${metric.color} bg-opacity-20`}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {metric.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* TVL Chart */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Total Value Locked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={tvlData}>
                  <defs>
                    <linearGradient id="colorTVL" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => [`$${value}M`, 'TVL']}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorTVL)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Protocol Comparison */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Protocol Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={protocolData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="tvl" fill="#3B82F6" name="TVL ($M)" />
                  <Bar dataKey="volume" fill="#10B981" name="Volume ($M)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Category Distribution */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Category Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
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
              {categoryData.map((item, index) => (
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

        {/* Top Tokens */}
        <Card className="lg:col-span-2 bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Top Tokens by Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTokens.map((token, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {token.symbol[0]}
                    </div>
                    <div>
                      <div className="text-white font-medium">{token.symbol}</div>
                      <div className="text-sm text-gray-400">{token.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{token.price}</div>
                    <div className={`text-sm ${token.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-300 font-medium">{token.volume}</div>
                    <div className="text-sm text-gray-400">24h Vol</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}