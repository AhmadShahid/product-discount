// import { ConfigService } from '@nestjs/config';
// import { DiscountModule } from 'src/modules/discount/discount.module';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { Discount } from 'src/modules/discount/discount.entity';
// import { Product } from 'src/modules/order/product.entity';
// import { Category } from 'src/modules/order/category.entity';
// import { User } from 'src/modules/users/user.entity';

// export const databaseProviders = [
//   {
//     provide: 'SEQUELIZE',
//     useFactory: async (configService: ConfigService) => {
//       SequelizeModule.forRoot({
//         dialect: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: 'root',
//         database: 'test',
//         synchronize: true,
//         models: [User, Discount, Product, Category],
//         autoLoadModels: true,
//       }),
//         console.log(configService.get('POSTGRES_HOST'));
//       // const sequelize = new Sequelize({
//       //   dialect: 'postgres',
//       //   host: configService.get('POSTGRES_HOST'),
//       //   port: configService.get('POSTGRES_PORT'),
//       //   username: configService.get('POSTGRES_USER'),
//       //   password: configService.get('POSTGRES_PASSWORD'),
//       //   database: configService.get('POSTGRES_DB'),
//       // });
//       // sequelize.addModels([User, Discount, Product, Category]);
//       // await sequelize.sync();
//       // return sequelize;
//     },
//     inject: [ConfigService],
//   },
// ];
