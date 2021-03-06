import { Wishlist as WishlistModule } from '../'

export const IsOnWishlist = {
  name: 'isOnWishlist',
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  created () {
    WishlistModule.register()
  },
  computed: {
    isOnWishlist (): boolean {
      return !!this.$store.state.wishlist.items.find(p => p.sku === this.product.sku) || false
    }
  },
}