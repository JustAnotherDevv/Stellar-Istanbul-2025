import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Sprout, TrendingUp, Clock, Shield, Star } from 'lucide-react';
import { toast } from 'sonner';

interface YieldFarmingProps {
  isConnected: boolean;
}

export function YieldFarming({ isConnected }: YieldFarmingProps) {
  const farmingPools = [
    {
      protocol: 'Aquarius',
      pair: 'XLM/USDC',
      apy: '24.7%',
      tvl: '$2.1M',
      multiplier: '2x',
      timeLeft: '14 days',
      rewards: ['AQUA', 'XLM'],
      risk: 'Medium',
      featured: true
    },
    {
      protocol: 'StellarX',
      pair: 'XLM/BTC',
      apy: '18.4%',
      tvl: '$5.8M',
      multiplier: '1.5x',
      timeLeft: '28 days',
      rewards: ['SLX'],
      risk: 'Low',
      featured: false
    },
    {
      protocol: 'Ultra Stellar',
      pair: 'AQUA/XLM',
      apy: '35.2%',
      tvl: '$890K',
      multiplier: '3x',
      timeLeft: '7 days',
      rewards: ['ULTRA', 'AQUA'],
      risk: 'High',
      featured: true
    },
    {
      protocol: 'Lobstr Vault',
      pair: 'USDC Single',
      apy: '12.1%',
      tvl: '$8.2M',
      multiplier: '1x',
      timeLeft: 'Ongoing',
      rewards: ['LOBSTR'],
      risk: 'Low',
      featured: false
    }
  ];

  const myPositions = [
    { pool: 'XLM/USDC', protocol: 'Aquarius', staked: '$1,250', rewards: '$45.7', apy: '24.7%' },
    { pool: 'USDC Single', protocol: 'Lobstr Vault', staked: '$800', rewards: '$12.3', apy: '12.1%' }
  ];

  const handleStake = (pool: any) => {
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }
    toast.success(`Staking in ${pool.pair} pool initiated!`);
  };

  const totalStaked = myPositions.reduce((sum, pos) => sum + parseFloat(pos.staked.replace('$', '').replace(',', '')), 0);
  const totalRewards = myPositions.reduce((sum, pos) => sum + parseFloat(pos.rewards.replace('$', '')), 0);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Yield Farming</h2>
        <p className="text-gray-400">Earn rewards by providing liquidity to farming pools</p>
      </div>

      {/* Stats */}
      {isConnected && myPositions.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border-green-600/20">
            <CardContent className="p-6 text-center">
              <Sprout className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">${totalStaked.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Total Staked</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-purple-600/20">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">${totalRewards.toFixed(1)}</div>
              <div className="text-sm text-gray-400">Rewards Earned</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border-yellow-600/20">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">18.4%</div>
              <div className="text-sm text-gray-400">Avg APY</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* My Positions */}
      {isConnected && myPositions.length > 0 && (
        <Card className="bg-white/5 border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white">My Farming Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myPositions.map((position, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Sprout className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{position.pool}</div>
                      <div className="text-sm text-gray-400">{position.protocol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{position.staked}</div>
                    <div className="text-sm text-gray-400">Staked</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-medium">{position.rewards}</div>
                    <div className="text-sm text-gray-400">Rewards</div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-400 font-medium">{position.apy}</div>
                    <div className="text-sm text-gray-400">APY</div>
                  </div>
                  <Button size="sm" variant="outline" className="border-blue-600/50 text-blue-300 hover:bg-blue-600/20">
                    Claim
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Available Pools */}
      <div className="grid lg:grid-cols-2 gap-6">
        {farmingPools.map((pool, index) => (
          <Card key={index} className={`bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ${
            pool.featured ? 'ring-2 ring-yellow-400/50' : ''
          }`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Sprout className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">{pool.pair}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs border-blue-600/50 text-blue-300">
                        {pool.protocol}
                      </Badge>
                      {pool.featured && (
                        <Badge className="bg-yellow-600 text-black text-xs">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  pool.multiplier === '3x' ? 'bg-red-600/20 text-red-300' :
                  pool.multiplier === '2x' ? 'bg-yellow-600/20 text-yellow-300' :
                  'bg-green-600/20 text-green-300'
                }`}>
                  {pool.multiplier}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400">APY</div>
                  <div className="text-2xl font-bold text-green-400">{pool.apy}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">TVL</div>
                  <div className="text-xl font-semibold text-white">{pool.tvl}</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">Ends in: {pool.timeLeft}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <span className={`text-xs ${
                    pool.risk === 'Low' ? 'text-green-400' : 
                    pool.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {pool.risk} Risk
                  </span>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">Rewards</div>
                <div className="flex gap-2">
                  {pool.rewards.map((reward, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">
                      {reward}
                    </Badge>
                  ))}
                </div>
              </div>

              <Progress value={Math.random() * 100} className="h-2 bg-white/10" />

              <Button 
                onClick={() => handleStake(pool)}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                disabled={!isConnected}
              >
                {!isConnected ? 'Connect Wallet' : 'Stake'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}