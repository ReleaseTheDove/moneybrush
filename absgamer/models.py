from datetime import datetime
import time
import uuid

from sqlalchemy import (create_engine, ForeignKey, Column, Integer,
                        String, Text, DateTime, TIMESTAMP, and_, or_, SmallInteger,
                        Float, DECIMAL, desc, asc, Table, join, event)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

from config import mysql_host, mysql_password, mysql_user


engine = create_engine(
            'mysql+pymysql://{}:{}@{}:3306/absgamer?charset=utf8'
            .format(mysql_user, mysql_password, mysql_host))
Base = declarative_base()
session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))
Base.query = session.query_property()


def next_id():
    return uuid.uuid1().hex


class Article(Base):
    __tablename__ = 'article'

    id = Column('id', String(32), primary_key=True, default=next_id)
    source = Column('source', String(255))
    author = Column('author', String(32))
    keyword = Column('keyword', String(32), index=True)
    title = Column('title', String(255), index=True, unique=True, nullable=False)
    category = Column('category', String(32), index=True, nullable=False)
    content = Column('content', Text, nullable=False)
    visit = Column('visit', Integer, default=0)
    update_at = Column('update_at', TIMESTAMP, default=time.time)
    edit_by = Column('edit_by', String(32), default='SimonZ')
    status = Column('status', Integer, default=0)
    create_at = Column('create_at', TIMESTAMP, default=time.time)


class Game(Base):
    __tablename__ = 'game'

    id = Column('id', String(32), primary_key=True, default=next_id)
    name = Column('name', String(255), index=True, unique=True, nullable=False)
    score = Column('score', Float, default=0)
    category = Column('category', String(32), index=True, nullable=False)
    url = Column('url', String(255))
    brief = Column('content', Text, nullable=False)
    public_at = Column('public_at', TIMESTAMP, default=time.time)
    run_status = Column('run_status', Integer, default=0)
    operator = Column('operator', String(255))
    developer = Column('developer', String(255))
    mode = Column('mode', String(255))
    platform = Column('platform', String(32))
    create_at = Column('create_at', TIMESTAMP, default=time.time)


class Ip(Base):
    __tablename__ = 'ip'

    id = Column('id', String(32), primary_key=True, default=next_id)
    addr = Column('addr', String(32), index=True, nullable=False)
    area = Column('area', String(32), index=True, nullable=False)
    create_at = Column('create_at', TIMESTAMP, default=time.time)


if __name__ == '__main__':
    # CREATE DATABASE absgamer CHARACTER SET utf8 COLLATE utf8_general_ci;
    Base.metadata.create_all(engine)