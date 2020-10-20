import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602809103621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage', //nome da sua escolha
                    columnNames: ['orphanage_id'], //nome da coluna que será a FK
                    referencedTableName: 'orphanages', //nome da tabela que está sendo referenciada
                    referencedColumnNames: ['id'], //nome do campo da tabela que está sendo referenciada
                    onUpdate: 'CASCADE', //basicamente o cascade vai ajudar caso por exemplo o banco de relação for deletado, ele vai mudar automaticamente o id do orfanato também em vez de perder, funciona da mesma forma para o onDelete
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
