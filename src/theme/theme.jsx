import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { CardComponent } from './card/Card';
import { CardBodyComponent } from './card/CardBody';
import { ContentComponent } from './layout/Content'; 
import { RenderedContentComponent } from './layout/RenderedContent';
import { RenderContainerComponent } from './layout/RenderContainerComponent';

export default extendTheme(
    globalStyles,
	CardComponent,
	CardBodyComponent, 
    ContentComponent, 
    RenderedContentComponent, 
    RenderContainerComponent
);