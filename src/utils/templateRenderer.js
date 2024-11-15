import parse, { domToReact } from 'html-react-parser';
import React from 'react';
import RedText from '@/components/utility/RedText';

const componentsMap = {
  redtext: RedText,
  b: 'b',
  i: 'i',
  // Add other components here as needed
};

export const renderTemplate = (template) => {
  const options = {
    replace: (domNode) => {
      if (domNode.type === 'tag' && componentsMap[domNode.name]) {
        const Component = componentsMap[domNode.name];
        return (
          <Component {...domNode.attribs}>
            {domToReact(domNode.children, options)}
          </Component>
        );
      }
    },
  };
  return parse(template, options);
};
