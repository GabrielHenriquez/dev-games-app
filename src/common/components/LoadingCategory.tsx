import * as Native from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const LoadingCategory = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  return (
    <Native.View>
      <Native.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Array(10).fill(null)}
        contentContainerClassName="gap-4 px-3"
        renderItem={() => (
          <ShimmerPlaceholder
            height={35}
            delay={0}
            duration={850}
            shimmerColors={['#6c7786', '#676e7b', '#95a3b6a0']}
            location={[0.3, 0.5, 0.7]}
            style={{ width: 95, borderRadius: 10 }}
          />
        )}
      />
    </Native.View>
  );
};

export default LoadingCategory;
