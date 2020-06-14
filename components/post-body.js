
import { RichText, Elements } from 'prismic-reactjs';

const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key });
};

const htmlSerializer = function(type, element, content, children, key) {
  let props = {};

  switch(type) {
    case Elements.image:
      props = { src: element.url , alt: element.alt || '', loading:"lazy" };
      return React.createElement('img', propsWithUniqueKey(props, key));

    // Return null to stick with the default behavior
    default:
      return null;
  }
};

export default function PostBody({ content }) {
  return (
    <RichText render={content} htmlSerializer={htmlSerializer} />
  )
}