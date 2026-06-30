-- CreateEnum
CREATE TYPE "CulinaryType" AS ENUM ('FOOD', 'DRINK');

-- CreateEnum
CREATE TYPE "NewsCategory" AS ENUM ('EVENT', 'CULINARY', 'UMKM', 'GENERAL');

-- CreateTable
CREATE TABLE "admin_users" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatarId" TEXT,
    "avatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "culinaries" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "CulinaryType" NOT NULL,
    "description" TEXT NOT NULL,
    "coinPrice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "culinaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "culinary_photos" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "culinaryId" INTEGER NOT NULL,

    CONSTRAINT "culinary_photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "category" "NewsCategory" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_uuid_key" ON "admin_users"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_email_key" ON "admin_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_username_key" ON "admin_users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "culinaries_uuid_key" ON "culinaries"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "culinaries_slug_key" ON "culinaries"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "culinary_photos_uuid_key" ON "culinary_photos"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "news_uuid_key" ON "news"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "notifications_uuid_key" ON "notifications"("uuid");

-- AddForeignKey
ALTER TABLE "culinary_photos" ADD CONSTRAINT "culinary_photos_culinaryId_fkey" FOREIGN KEY ("culinaryId") REFERENCES "culinaries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
