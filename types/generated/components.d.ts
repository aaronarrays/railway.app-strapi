import type { Struct, Schema } from '@strapi/strapi';

export interface WheelsCustomWheels extends Struct.ComponentSchema {
  collectionName: 'components_wheels_custom_wheels';
  info: {
    displayName: 'Custom Wheels';
    icon: 'cog';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'wheels.custom-wheels': WheelsCustomWheels;
    }
  }
}
