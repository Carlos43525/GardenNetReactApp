import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { CardComponent } from './card/Card';
import { CardBodyComponent } from './card/CardBody';
import { ContentComponent } from './layout/Content'; 
import { RenderedContentComponent } from './layout/RenderedContent';
import { RenderContainerComponent } from './layout/RenderContainerComponent';
import { buttonStyles } from './components/button';

export default extendTheme(
    globalStyles,
    buttonStyles, 
	CardComponent,
	CardBodyComponent, 
    ContentComponent, 
    RenderedContentComponent, 
    RenderContainerComponent
);