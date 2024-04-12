import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useCartContext } from "../context/cart_context";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import renderHTML from "react-render-html";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const ProductTab = (description) => {
  // console.log("description ", description);
  return (
    <Wrapper>
      {/* <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Description{" "}
              <i className="close">
                <FiPlus />
              </i>
              <i className="open">
                <FiMinus />
              </i>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {renderHTML(description.description)}
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Additional information
              <i className="close">
                <FiPlus />
              </i>
              <i className="open">
                <FiMinus />
              </i>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              2 This lovely comfort-fit kurta and lantern pants set is perfect
              to wear at home, an easy stroll, coffee date, or casual brunch.
              The model is wearing an S size without any alterations.
            </p>
            <p>
              Style Tip: Go easy on accessories with just a delicate charm
              bracelet and bottoms-appropriate footwear.{" "}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Styling Tips
              <i className="close">
                <FiPlus />
              </i>
              <i className="open">
                <FiMinus />
              </i>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              3 This lovely comfort-fit kurta and lantern pants set is perfect
              to wear at home, an easy stroll, coffee date, or casual brunch.
              The model is wearing an S size without any alterations.
            </p>
            <p>
              Style Tip: Go easy on accessories with just a delicate charm
              bracelet and bottoms-appropriate footwear.{" "}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion> */}
      {/* <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Additional information</Tab>
          <Tab>Styling Tips</Tab>
        </TabList>

        <TabPanel>{renderHTML(description.description)}</TabPanel>
        <TabPanel></TabPanel>
        <TabPanel>
          <p>
            3 This lovely comfort-fit kurta and lantern pants set is perfect to
            wear at home, an easy stroll, coffee date, or casual brunch. The
            model is wearing an S size without any alterations.
          </p>
          <p>
            Style Tip: Go easy on accessories with just a delicate charm
            bracelet and bottoms-appropriate footwear.{" "}
          </p>
        </TabPanel>
      </Tabs> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  ul.react-tabs__tab-list {
    display: flex;
    flex-wrap: wrap;
  }
  ul.react-tabs__tab-list li {
    flex: 0 0 33.333%;
    max-width: 33.33%;
    color: #000;
    background: transparent;
    text-align: center;
    font-size: 19px;
    letter-spacing: 0.1em;
    font-weight: 200;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px 10px;
    border: 1px solid #000;
    border-left: none;
    cursor: pointer;
  }
  ul.react-tabs__tab-list li.react-tabs__tab--selected {
    background: #48c1cc;
    color: #fff;
    border-color: #48c1cc !important;
    border-bottom-color: #000 !important;
  }
  ul.react-tabs__tab-list li:first-child {
    border-left: 1px solid #000;
  }
  .react-tabs .react-tabs__tab-panel {
    border: 1px solid;
    padding: 10px;
    display: none;
  }
  .react-tabs .react-tabs__tab-panel.react-tabs__tab-panel--selected {
    display: block;
  }
  .accordion__item {
    .accordion__button {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 1px;
      padding: 22px 0;
      border-top: 1px solid #000;
      transition: all 0.5s ease;
      display: flex;
      align-items: center;
      cursor: pointer;
      i {
        margin-left: auto;
        padding-right: 10px;
      }
      i.open {
        display: none;
        transition: all 0.5s ease;
      }
    }
    :last-child {
      .accordion__button {
        border-bottom: 1px solid #000;
      }
      .accordion__button[aria-expanded="true"] {
        border-bottom: none;
      }
    }
  }
  .accordion__button[aria-expanded="true"] {
    i.close {
      display: none;
      transition: all 0.5s ease;
    }
    i.open {
      display: inline-block;
      transition: all 0.5s ease;
    }
  }

  @media screen and (max-width: 575px) {
    ul.react-tabs__tab-list {
      flex-direction: column;
      li {
        width: 100%;
        max-width: 100%;
        flex: 0 0 100%;
        border-left: 1px solid #000;
        border-bottom: none;
        :last-child {
          border-bottom: 1px solid #000;
        }
      }
    }
  }
`;
export default ProductTab;
