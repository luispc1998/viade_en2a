import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import {deleteFriend, viewRoutes } from '../../services/friendsManager';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Welcome Page UI component, containing the styled components for the Welcome Page
 * Image component will get theimage context and resolve the value to render.
 * @param props
 */
export const ManageFriendsContent = props => {
  const { webId, friends} = props;
  const { t } = useTranslation();


  return (
    <div data-testid="manageFriends-container">
      {
        friends.map(friend => (
        <Row className="friend" data-testid={friend+"d"}>
          <Col>
            <Button variant="light" className="buttonFriend" onClick={(event) => viewRoutes(event,friend)} data-testid={"buttonFriend"+friend}  key={"buttonFriend"+friend}>
              {friend}
            </Button>
          </Col>
          <Col>
            <DropdownButton variant="light" key={friend+"dropdown"} title=""> 
              <Dropdown.Item as="button" target="_blank" href={friend} key={friend+"dropdownI1"}>{t('manageFriends.viewProfile')}</Dropdown.Item>
              <Dropdown.Item as="button"  onClick={(event) => deleteFriend(event,friend, webId)} key={friend+"dropdownI2"}>{t('manageFriends.delete')}</Dropdown.Item>
              <Dropdown.Item as="button"  onClick={(event) => viewRoutes(event,friend)} key={friend+"dropdownI3"}>{t('manageFriends.viewRoutes')}</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        ))
      }
      </div>
  );
};
