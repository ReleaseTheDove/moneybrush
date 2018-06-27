"""real init table

Revision ID: 7ef4b97a57c3
Revises: e79522a99c8a
Create Date: 2018-06-20 01:27:10.549240

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7ef4b97a57c3'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('article',
    sa.Column('id', sa.String(length=32), nullable=False),
    sa.Column('source', sa.String(length=255), nullable=True),
    sa.Column('author', sa.String(length=32), nullable=True),
    sa.Column('keyword', sa.String(length=32), nullable=True),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('category', sa.String(length=32), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('visit', sa.Integer(), nullable=True),
    sa.Column('update_at', sa.DateTime(), nullable=True),
    sa.Column('edit_by', sa.String(length=32), nullable=True),
    sa.Column('status', sa.Integer(), nullable=True),
    sa.Column('create_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_article_category'), 'article', ['category'], unique=False)
    op.create_index(op.f('ix_article_create_at'), 'article', ['create_at'], unique=False)
    op.create_index(op.f('ix_article_keyword'), 'article', ['keyword'], unique=False)
    op.create_index(op.f('ix_article_title'), 'article', ['title'], unique=True)
    op.create_index(op.f('ix_article_update_at'), 'article', ['update_at'], unique=False)
    op.create_table('game',
    sa.Column('id', sa.String(length=32), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('score', sa.Float(), nullable=True),
    sa.Column('category', sa.String(length=32), nullable=False),
    sa.Column('url', sa.String(length=255), nullable=True),
    sa.Column('thumbnail', sa.String(length=255), nullable=True),
    sa.Column('brief', sa.Text(), nullable=False),
    sa.Column('public_at', sa.DateTime(), nullable=True),
    sa.Column('run_status', sa.Integer(), nullable=True),
    sa.Column('operator', sa.String(length=255), nullable=True),
    sa.Column('developer', sa.String(length=255), nullable=True),
    sa.Column('mode', sa.String(length=255), nullable=True),
    sa.Column('platform', sa.String(length=32), nullable=True),
    sa.Column('update_at', sa.DateTime(), nullable=True),
    sa.Column('create_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_game_category'), 'game', ['category'], unique=False)
    op.create_index(op.f('ix_game_create_at'), 'game', ['create_at'], unique=False)
    op.create_index(op.f('ix_game_name'), 'game', ['name'], unique=True)
    op.create_index(op.f('ix_game_update_at'), 'game', ['update_at'], unique=False)
    op.create_table('ip',
    sa.Column('id', sa.String(length=32), nullable=False),
    sa.Column('addr', sa.String(length=32), nullable=False),
    sa.Column('area', sa.String(length=32), nullable=False),
    sa.Column('create_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_ip_addr'), 'ip', ['addr'], unique=False)
    op.create_index(op.f('ix_ip_area'), 'ip', ['area'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_ip_area'), table_name='ip')
    op.drop_index(op.f('ix_ip_addr'), table_name='ip')
    op.drop_table('ip')
    op.drop_index(op.f('ix_game_update_at'), table_name='game')
    op.drop_index(op.f('ix_game_name'), table_name='game')
    op.drop_index(op.f('ix_game_create_at'), table_name='game')
    op.drop_index(op.f('ix_game_category'), table_name='game')
    op.drop_table('game')
    op.drop_index(op.f('ix_article_update_at'), table_name='article')
    op.drop_index(op.f('ix_article_title'), table_name='article')
    op.drop_index(op.f('ix_article_keyword'), table_name='article')
    op.drop_index(op.f('ix_article_create_at'), table_name='article')
    op.drop_index(op.f('ix_article_category'), table_name='article')
    op.drop_table('article')
    # ### end Alembic commands ###
