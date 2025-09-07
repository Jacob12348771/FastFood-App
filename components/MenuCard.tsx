import { View, Text, TouchableOpacity, Image } from 'react-native'
import { MenuItem } from '@/type'
import { appwriteConfig } from '@/lib/appwrite';

const MenuCard = ({ item: {image_url, name, price}}: {item:MenuItem}) => {
  // Removed incorrectly formatted image URL and use the one directly from item.
  //const imageUrl = `${image_url}?project=${appwriteConfig.projectId}`;
  return (
    <TouchableOpacity>
        <Image source={{uri: image_url}} className="size-32 absolute -top-10" resizeMode="contain" />
        <Text className="text-center base-bold text-dark-100 mb-2" numberOfLines={1}>{name}</Text>
    </TouchableOpacity>
  )
}

export default MenuCard