-- CreateTable
CREATE TABLE `Mark` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(15) NOT NULL,
    `description` TEXT NOT NULL,

    UNIQUE INDEX `Mark_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Model` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(15) NOT NULL,
    `description` TEXT NOT NULL,

    UNIQUE INDEX `Model_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MarkModel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `markId` INTEGER NOT NULL,
    `modelId` INTEGER NOT NULL,

    UNIQUE INDEX `MarkModel_markId_modelId_key`(`markId`, `modelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MarkModel` ADD CONSTRAINT `MarkModel_markId_fkey` FOREIGN KEY (`markId`) REFERENCES `Mark`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MarkModel` ADD CONSTRAINT `MarkModel_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
