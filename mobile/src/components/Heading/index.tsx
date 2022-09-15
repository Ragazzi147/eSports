import { View, Text, ViewProps } from 'react-native';
import { style } from './styles';


interface Props extends ViewProps {
    title: string;
    subtitle: string;
}

export function Heading({title, subtitle, ...rest}: Props) {
  return (
    <View style= {style.container} {...rest}>

        <Text style={style.title}>
            {title}
        </Text>
        
        <Text style={style.subtitle}>
            {subtitle}
        </Text>

    </View>
  );
}