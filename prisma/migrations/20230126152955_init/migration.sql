-- CreateTable
CREATE TABLE `Car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `markModelId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_markModelId_fkey` FOREIGN KEY (`markModelId`) REFERENCES `MarkModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
