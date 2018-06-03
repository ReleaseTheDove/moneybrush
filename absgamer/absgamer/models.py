from datetime import datetime
import uuid
import os

from sqlalchemy import (create_engine, ForeignKey, Column, Integer,
                        String, Text, DateTime, TIMESTAMP, and_, or_, SmallInteger,
                        Float, DECIMAL, desc, asc, Table, join, event)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker


mysql_user = os.getenv('mysql_user')
mysql_password = os.getenv('mysql_password')
mysql_host = os.getenv('mysql_host')

engine = create_engine(
            'mysql+pymysql://{}:{}@{}:3306/absgamer?charset=utf8'
            .format(mysql_user, mysql_password, mysql_host))
Base = declarative_base()
session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))
Base.query = session.query_property()


def next_id():
    return uuid.uuid1().hex


class Extension(object):

    @classmethod
    def add(cls, resource):
        session.add(resource)
        try:
            session.commit()
            return resource
        except Exception as e:
            session.rollback()
            return str(e)

    @classmethod
    def delete(cls, resource):
        session.delete(resource)
        try:
            session.commit()
            return resource
        except Exception as e:
            session.rollback()
            return str(e)

    @classmethod
    def update(cls, resource, params={}):
        try:
            [setattr(resource, key, value) for key, value in params.items()]
            session.commit()
            return resource
        except Exception as e:
            session.rollback()
            return str(e)

    def to_dict(self):
        dct = {}
        for col in self.__table__.columns:
            v = getattr(self, col.name)
            if isinstance(col.type, datetime):
                v = v.strftime("%Y-%m-%d %H:%M:%S")
            dct[col.name] = v
        return dct

    @classmethod
    def get_first(cls, **kwargs):
        r = cls.query.filter_by(**kwargs).first()
        if r:
            return r.to_dict()

    @classmethod
    def get_all(cls, **kwargs):
        return [r.to_dict() for r in cls.query.filter_by(**kwargs).all()]


class Article(Base, Extension):
    __tablename__ = 'article'

    id = Column('id', String(32), primary_key=True, default=next_id)
    source = Column('source', String(255))
    author = Column('author', String(32))
    keyword = Column('keyword', String(32), index=True)
    title = Column('title', String(255), index=True, unique=True, nullable=False)
    category = Column('category', String(32), index=True, nullable=False)
    content = Column('content', Text, nullable=False)
    visit = Column('visit', Integer, default=0)
    update_at = Column('update_at', DateTime, default=datetime.now, onupdate=datetime.now, index=True)
    edit_by = Column('edit_by', String(32), default='SimonZ')
    status = Column('status', Integer, default=0)
    create_at = Column('create_at', DateTime, default=datetime.now, index=True)


class Game(Base, Extension):
    __tablename__ = 'game'

    id = Column('id', String(32), primary_key=True, default=next_id)
    name = Column('name', String(255), index=True, unique=True, nullable=False)
    score = Column('score', Float, default=0)
    category = Column('category', String(32), index=True, nullable=False)
    url = Column('url', String(255))
    brief = Column('brief', Text, nullable=False)
    public_at = Column('public_at', DateTime, default=datetime.now)
    run_status = Column('run_status', Integer, default=0)
    operator = Column('operator', String(255))
    developer = Column('developer', String(255))
    mode = Column('mode', String(255))
    platform = Column('platform', String(32))
    update_at = Column('update_at', DateTime, default=datetime.now, onupdate=datetime.now, index=True)
    create_at = Column('create_at', DateTime, default=datetime.now, index=True)


class Ip(Base, Extension):
    __tablename__ = 'ip'

    id = Column('id', String(32), primary_key=True, default=next_id)
    addr = Column('addr', String(32), index=True, nullable=False)
    area = Column('area', String(32), index=True, nullable=False)
    create_at = Column('create_at', DateTime, default=datetime.now)


if __name__ == '__main__':
    # CREATE DATABASE absgamer CHARACTER SET utf8 COLLATE utf8_general_ci;
    Base.metadata.create_all(engine)
