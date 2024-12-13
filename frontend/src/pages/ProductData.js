const products = [
    {
      id: 1,
      name: ' Bluetooth Headphones',
      description: 'Experience high-quality sound with noise-canceling technology and up to 20 hours of battery life.',
      price: 59,
      category: 'Electronics',
      imageUrl: 'https://media.istockphoto.com/id/1369383487/photo/wireless-headphones-on-a-white-background-close-up-the-concept-of-modern-technology.jpg?s=612x612&w=0&k=20&c=X0x48NCWLkQtHQDhC3Mj1aGSqvtjFnp53y16j20d1qg=',
      rating: 4.5,
      inStock: true,
      brand: 'SoundWave',
      discount: 10, // 10% off
    },
    {
      id: 2,
      name: 'Organic Cotton T-Shirt',
      description: 'Soft, breathable, and eco-friendly. Available in various sizes and colors.',
      price: 19,
      category: 'Apparel',
      imageUrl: 'https://media.istockphoto.com/id/1453173505/photo/beige-tshirt-and-green-paper-label-with-inscription-made-from-recycled-materials-ecology.jpg?s=612x612&w=0&k=20&c=fXlMsGkucO1OBynZ8X60hFsbwgdNCi6T0CBSoDi0quo=',
      rating: 4.2,
      inStock: true,
      brand: 'EcoWear',
      discount: 15,
    },
    {
      id: 3,
      name: 'Smartwatch Fitness ',
      description: 'Track your fitness, monitor your heart rate, and receive notifications on the go with this sleek smartwatch.',
      price: 129,
      category: 'Electronics',
      imageUrl: 'https://media.istockphoto.com/id/1286099942/photo/close-up-of-hand-touching-smartwatch-with-health-app-on-the-screen-gadget-for-fitness-active.jpg?s=612x612&w=0&k=20&c=zX9Fko_T6qppRO8J8BSYu4DovmLjPFKwi_x6l0GzCq0=',
      rating: 4.8,
      inStock: false, // Out of stock
      brand: 'FitTrack',
      discount: 20,
    },
    {
      id: 4,
      name: 'Stainless Steel Coffee Mug',
      description: 'Keep your drinks hot or cold for hours with this insulated, double-walled mug.',
      price: 24,
      category: 'Kitchen',
      imageUrl: 'https://media.istockphoto.com/id/1875413792/photo/reusable-eco-steel-thermo-water-bottle-on-table.jpg?s=612x612&w=0&k=20&c=4K41WWe3Oo1PHhP-LChwInq2X3VuW5HksogXnjqnJKk=',
      rating: 4.7,
      inStock: true,
      brand: 'MugLife',
      discount: 5,
    },
    {
      id: 5,
      name: 'LED Desk Lamp   ',
      description: 'Adjustable brightness and color temperature for the perfect work or study environment.',
      price: 39,
      category: 'Home',
      imageUrl: 'https://media.istockphoto.com/id/1218918229/photo/round-white-porcelain-ball-shade-lamp.jpg?s=612x612&w=0&k=20&c=qpWRdbTH28Tk28tbcUEIn5V78nDQf2Jo5jExPVv1mAM=',
      rating: 4.6,
      inStock: true,
      brand: 'LightMate',
      discount: 10,
    },
    {
      id: 6,
      name: 'Fitness Resistance Bands Set',
      description: 'A set of durable, multi-colored resistance bands perfect for your home workout.',
      price: 22,
      category: 'Fitness',
      imageUrl: 'https://media.istockphoto.com/id/1222422932/photo/low-section-of-man-with-exercise-equipment-on-hardwood-floor.jpg?s=612x612&w=0&k=20&c=HIva8h17MKwbb7TYzgKidRT8caNjvNMXAdS5Bj4gTCg=',
      rating: 4.4,
      inStock: true,
      brand: 'FlexFit',
      discount: 0,
    },
    {
      id: 7,
      name: 'Leather Wallet for Men',
      description: 'A premium quality leather wallet with multiple card slots and a slim design.',
      price: 39,
      category: 'Accessories',
      imageUrl: 'https://media.istockphoto.com/id/1147402027/photo/female-hands-of-the-customer-trying-hand-made-crafted-leather-wallet-on-background-of-a-shop.jpg?s=612x612&w=0&k=20&c=t34GwXVHSKYooCQs8_5CB_x48vHkOKfXDr45fixnTHY=',
      rating: 4.3,
      inStock: true,
      brand: 'LuxeCraft',
      discount: 25,
    },
    {
      id: 8,
      name: '4K Ultra HD Smart TV',
      description: 'Enjoy stunning visuals with this 50-inch 4K UHD TV, featuring smart connectivity and voice control.',
      price: 499,
      category: 'Electronics',
      imageUrl: 'https://media.istockphoto.com/id/1146891378/vector/4k-tv-screen.jpg?s=612x612&w=0&k=20&c=sSV8GUiFz1KcYjB9vYlo3ZlYXwEIX6pOXtfdKZgf2Ek=',
      rating: 4.9,
      inStock: true,
      brand: 'VisionTech',
      discount: 0,
    },
    {
      id: 9,
      name: 'Bluetooth Portable Speaker',
      description: 'Take your music anywhere with this waterproof, portable Bluetooth speaker with a 12-hour battery life.',
      price: 49,
      category: 'Electronics',
      imageUrl: 'https://media.istockphoto.com/id/1297096514/photo/portable-wi-fi-speaker-musical-column-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=ajPERrqKtRW5eIffQd0PVv9vnHhJe12GVvurb7yBGlc=',
      rating: 4.5,
      inStock: true,
      brand: 'BoomBox',
      discount: 5,
    },
    {
      id: 10,
      name: 'Gourmet Spice Rack Set',
      description: 'A beautifully organized spice rack with 16 premium spices from around the world.',
      price: 29,
      category: 'Kitchen',
      imageUrl: 'https://media.istockphoto.com/id/1297850298/photo/spice-rack-with-bunch-of-different-spices-on-it.jpg?s=612x612&w=0&k=20&c=ycanEvMHk7hOb3gLGXS3BEIEHnSnO160oOPcxoS0cwI=',
      rating: 4.6,
      inStock: true,
      brand: 'SpiceWorld',
      discount: 10,
    }
  ];
  
  export default products;
  