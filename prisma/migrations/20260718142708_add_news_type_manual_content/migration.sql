-- CreateEnum
CREATE TYPE "NewsType" AS ENUM ('LINK', 'MANUAL');

-- AlterTable
ALTER TABLE "news" ADD COLUMN     "content" TEXT,
ADD COLUMN     "type" "NewsType" NOT NULL DEFAULT 'LINK',
ALTER COLUMN "link" DROP NOT NULL;
