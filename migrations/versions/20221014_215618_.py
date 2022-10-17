"""empty message

Revision ID: 6d28b1dcba4a
Revises: ffdc0a98111c
Create Date: 2022-10-14 21:56:18.356295

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6d28b1dcba4a'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('products',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=1000), nullable=False),
    sa.Column('description', sa.String(length=500), nullable=False),
    sa.Column('price', sa.Float(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('category', sa.String(length=50), nullable=False),
    sa.Column('highlight', sa.String(length=50), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=False),
    sa.Column('updatedAt', sa.DateTime(), nullable=False),
    sa.Column('previewImage', sa.String(length=255), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('carts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('productId', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('createAt', sa.DateTime(), nullable=False),
    sa.Column('updateAt', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.ForeignKeyConstraint(['productId'], ['products.id'],),
    sa.PrimaryKeyConstraint('id')
    )

    # op.create_table('cartItems',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('productId', sa.Integer(), nullable=False),
    # sa.Column('quantity', sa.Integer(), nullable=False),
    # sa.Column('cartId', sa.Integer(), nullable=False),
    # sa.ForeignKeyConstraint(['cartId'], ['carts.id'], ),
    # sa.ForeignKeyConstraint(['productId'], ['products.id'], ),
    # sa.PrimaryKeyConstraint('id')
    # )

    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=500), nullable=False),
    sa.Column('stars', sa.Integer(), nullable=False),
    sa.Column('productId', sa.Integer(), nullable=False),
    sa.Column('reviewImg', sa.String(length=100), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=False),
    sa.Column('updatedAt', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['productId'], ['products.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('carts')
    op.drop_table('products')
    # ### end Alembic commands ###
