import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./style";
import { FilterStatus } from "@/Types/FilterStatus";

type Props = TouchableOpacityProps & {
  status: FilterStatus
  isActive: boolean
}

export function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.8}
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
    >
      <Text>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  )
}